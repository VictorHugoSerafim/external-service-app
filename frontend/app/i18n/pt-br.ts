import { Translations } from "./en"

const ptbr: Translations = {
  common: {
    ok: "OK !",
    cancel: "Cancelar",
    back: "Voltar",
  },
  welcomeScreen: {
    postscript:
      "puts — Provavelmente esta não é a aparência do seu aplicativo. (A menos que seu designer lhe tenha fornecido essas telas, nesse caso, coloque-as em produção!)",
    readyForLaunch: "Seu aplicativo, quase pronto para lançamento!",
    exciting: "(ah, isso é emocionante!)",
  },
  errorScreen: {
    title: "Algo deu errado!",
    friendlySubtitle:
      "Esta é a tela que seus usuários verão na produção quando um erro for gerado. Você desejará personalizar esta mensagem (localizada em `app/i18n/fr.ts`) e provavelmente também o layout (`app/screens/ErrorScreen`). Se você deseja removê-lo completamente, verifique `app/app.tsx` para o componente <ErrorBoundary>.",
    reset: "REINICIAR O APLICATIVO",
  },
  emptyStateComponent: {
    generic: {
      heading: "Tão vazio...tão triste",
      content:
        "Nenhum dado encontrado ainda. Experimente clicar no botão para atualizar ou recarregar o aplicativo.",
      button: "Vamos tentar de novo",
    },
  },
}

export default ptbr