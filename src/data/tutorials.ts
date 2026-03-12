export interface TutorialStep {
  title: string;
  description: string;
  note?: string;
}

export interface Platform {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // image path or icon name
  color: string;
  type: "image" | "lucide" | "text";
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
    icon: "apple",
    color: "from-gray-700 to-gray-900",
    type: "lucide",
  },
  {
    id: "play-store",
    title: "Play Store",
    subtitle: "Android",
    icon: "/icons/play-store.png",
    color: "from-green-700 to-green-900",
    type: "image",
  },
  {
    id: "smart-tv",
    title: "Smart TV",
    subtitle: "Samsung · LG · Fire Stick",
    icon: "/icons/smart-tv.png",
    color: "from-blue-700 to-blue-900",
    type: "image",
  },
  {
    id: "roku",
    title: "Roku TV",
    subtitle: "Loja Roku",
    icon: "Roku",
    color: "from-purple-700 to-purple-900",
    type: "text",
  },
  {
    id: "tv-box",
    title: "TV Box MXQ",
    subtitle: "Downloader",
    icon: "box",
    color: "from-amber-700 to-amber-900",
    type: "lucide",
  },
  {
    id: "web",
    title: "Assista Agora",
    subtitle: "Acesso Web",
    icon: "/icons/live-stream.png",
    color: "from-red-700 to-red-900",
    type: "image",
  },
];

// APK download URL - update this when you have your own hosted APK
export const APK_DOWNLOAD_URL = "/downloads/signalplay.apk";
export const APK_VERSION = "v1.0.0";
