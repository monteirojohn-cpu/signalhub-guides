export interface TutorialStep {
  title: string;
  description: string;
  note?: string;
}

export interface PlatformFallbackApp {
  note: string;
  app: string;
  provedor?: string;
  dominio?: string;
  login?: string;
  senha?: string;
}

export interface PlatformModalOption {
  label: string;
  app?: string;
  provedor?: string;
  dominio?: string;
  login?: string;
  senha?: string;
}

export interface PlatformModalInfo {
  options?: PlatformModalOption[];
  app?: string;
  provedor?: string;
  dominio?: string;
  login?: string;
  senha?: string;
  compativel?: string;
  downloaderCode?: string;
  downloaderNote?: string;
  storeLink?: string;
  storeLinkLabel?: string;
  fallbackApp?: PlatformFallbackApp;
}

export interface Platform {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  type: "image" | "lucide" | "text";
  action: "link" | "modal";
  href?: string;
  modalInfo?: PlatformModalInfo;
}

export const tutorialSteps: TutorialStep[] = [
  {
    title: "Baixe e instale o APK",
    description:
      "Faça o download do arquivo APK no botão da página inicial. No seu celular ou TV Box Android, vá em Configurações > Segurança e ative 'Fontes desconhecidas' ou 'Instalar apps de outras fontes'. Depois abra o arquivo APK baixado para iniciar a instalação.",
  },
  {
    title: "Abra o aplicativo",
    description:
      "Após a instalação, localize o ícone do aplicativo na tela inicial ou no menu de apps do seu dispositivo e toque para abrir.",
  },
  {
    title: "Insira suas credenciais",
    description:
      "Na tela de login, informe o usuário e senha fornecidos pelo seu PROVEDOR DE INTERNET. Esses dados estão no seu contrato ou foram enviados por e-mail/WhatsApp no momento da ativação do serviço.",
  },
  {
    title: "Escolha o servidor",
    description:
      "Se o app solicitar um servidor ou portal, informe o endereço fornecido pelo seu PROVEDOR DE INTERNET. Em caso de dúvida, entre em contato com o suporte.",
  },
  {
    title: "Aproveite o conteúdo!",
    description:
      "Após o login, você terá acesso ao conteúdo disponível no seu plano. Navegue pelas categorias e aproveite!",
  },
];

export const platforms: Platform[] = [
  {
    id: "app-store",
    title: "App Store",
    subtitle: "iPhone & iPad",
    icon: "/icons/app-store.png",
    color: "from-blue-500 to-blue-700",
    type: "image",
    action: "link",
    href: "https://apps.apple.com/br/app/signalplay/id6749374183",
  },
  {
    id: "play-store",
    title: "Play Store",
    subtitle: "Android",
    icon: "/icons/play-store.png",
    color: "from-green-700 to-green-900",
    type: "image",
    action: "link",
    href: "https://play.google.com/store/apps/details?id=br.com.signalplay.tv.mobile&pcampaignid=web_share",
  },
  {
    id: "google-tv",
    title: "Google TV",
    subtitle: "Android TV ou STB",
    icon: "/icons/google-tv.png",
    color: "from-green-600 to-green-800",
    type: "image",
    action: "link",
    href: "https://play.google.com/store/apps/details?id=br.com.signalplay.tv.stb&pcampaignid=web_share",
  },
  {
    id: "smart-tv",
    title: "Smart TV",
    subtitle: "Samsung · LG · Fire Stick",
    icon: "/icons/smart-tv.png",
    color: "from-blue-700 to-blue-900",
    type: "image",
    action: "modal",
    modalInfo: {
      app: "SIGNALPLAY",
      login: "CONSULTE AO PROVEDOR",
      senha: "CONSULTE AO PROVEDOR",
      compativel: "Compatível com Samsung Smart TV, LG Smart TV e Amazon Fire Stick.",
      fallbackApp: {
        note: "Caso a sua TV não tenha o app SIGNALPLAY, baixe o app abaixo:",
        app: "CDNTV PLAY",
        provedor: "SIGNAL PLAY",
        dominio: "tv.signalplay.com.br",
        login: "CONSULTE AO PROVEDOR",
        senha: "CONSULTE AO PROVEDOR",
      },
    },
  },
  {
    id: "roku",
    title: "Roku TV",
    subtitle: "Loja Roku",
    icon: "Roku",
    color: "from-purple-700 to-purple-900",
    type: "text",
    action: "modal",
    modalInfo: {
      app: "SIGNALPLAY",
      login: "CONSULTE AO PROVEDOR",
      senha: "CONSULTE AO PROVEDOR",
      storeLink: "https://channelstore.roku.com/pt-br/details/fad401250fe02535949954b8f855f27c:f1a3a9a333538d79fb80f491da28c64b/signalplay",
      storeLinkLabel: "Abrir na Loja Roku",
    },
  },
  {
    id: "tv-box",
    title: "TV Box MXQ",
    subtitle: "Downloader",
    icon: "box",
    color: "from-amber-700 to-amber-900",
    type: "lucide",
    action: "modal",
    modalInfo: {
      downloaderCode: "3103772",
      downloaderNote: "Ou instale o APK via pen drive.",
    },
  },
  {
    id: "web",
    title: "Assista Agora",
    subtitle: "Acesso Web",
    icon: "/icons/live-stream.png",
    color: "from-red-700 to-red-900",
    type: "image",
    action: "link",
    href: "https://tv.signalplay.com.br",
  },
];

export const APK_DOWNLOAD_URL = "/downloads/signalplay.apk";
export const APK_VERSION = "v1.0.0";
