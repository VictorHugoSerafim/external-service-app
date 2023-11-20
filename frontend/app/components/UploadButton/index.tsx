import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import ImagePicker, { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

const UploadButton: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (launchImageLibrary) {
      launchImageLibrary(options, (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = { uri: response.uri };
          setSelectedImage(source.uri);
        }
      });
    } else {
      console.error('ImagePicker not available. Make sure it is correctly installed.');
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <Button title="Select Image" onPress={handleImageUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default UploadButton;
