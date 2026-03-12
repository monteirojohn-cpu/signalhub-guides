import { 
  Tv, Smartphone, Monitor, Tablet, Box, Globe, Play, Airplay 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TutorialStep {
  title: string;
  description: string;
  note?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  steps: TutorialStep[];
  notes?: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: "smart-tv-lg",
    title: "Smart TV LG",
    subtitle: "webOS",
    icon: Tv,
    color: "from-red-600/20 to-red-900/20",
    steps: [
      { title: "Acesse a LG Content Store", description: "Na sua TV LG, pressione o botão Home no controle remoto e acesse a LG Content Store (loja de aplicativos)." },
      { title: "Busque o aplicativo", description: "Na barra de pesquisa, digite 'SIGNALPLAY' ou 'CDNTV' e pressione buscar." },
      { title: "Instale o aplicativo", description: "Selecione o aplicativo nos resultados e clique em 'Instalar'." },
      { title: "Abra o aplicativo", description: "Após a instalação, abra o app e insira seu login e senha fornecidos pelo seu provedor." },
    ],
    notes: ["Certifique-se de que sua TV está conectada à internet.", "Caso o app não apareça na loja, verifique se o modelo da sua TV é compatível."],
  },
  {
    id: "smart-tv-samsung",
    title: "Smart TV Samsung",
    subtitle: "Tizen",
    icon: Tv,
    color: "from-blue-600/20 to-blue-900/20",
    steps: [
      { title: "Acesse a Samsung Apps", description: "Pressione o botão Home no controle remoto da sua TV Samsung e acesse a loja de aplicativos (Samsung Apps)." },
      { title: "Pesquise o aplicativo", description: "Use a busca para digitar 'SIGNALPLAY' ou 'CDNTV'." },
      { title: "Instale o app", description: "Selecione o app e clique em 'Instalar'. Aguarde o download completar." },
      { title: "Faça login", description: "Abra o aplicativo instalado e insira suas credenciais de acesso." },
    ],
    notes: ["Modelos a partir de 2017 são compatíveis.", "Mantenha o sistema da TV atualizado."],
  },
  {
    id: "android-tv",
    title: "Android TV",
    subtitle: "Google TV / Android TV",
    icon: Airplay,
    color: "from-green-600/20 to-green-900/20",
    steps: [
      { title: "Acesse a Google Play Store", description: "No menu principal da sua Android TV, abra a Google Play Store." },
      { title: "Pesquise o app", description: "Digite 'SIGNALPLAY' na barra de pesquisa." },
      { title: "Instale", description: "Clique em 'Instalar' e aguarde o download." },
      { title: "Abra e faça login", description: "Após instalar, abra o app e insira seu login e senha." },
    ],
    notes: ["Compatível com TVs TCL, Philips, Sony e outras com Android TV."],
  },
  {
    id: "fire-tv",
    title: "Fire TV / Fire Stick",
    subtitle: "Amazon Fire",
    icon: Play,
    color: "from-orange-600/20 to-orange-900/20",
    steps: [
      { title: "Acesse a loja de apps", description: "No menu do Fire TV Stick, acesse a seção 'Buscar' ou 'Loja de Aplicativos'." },
      { title: "Busque o app", description: "Digite 'SIGNALPLAY' ou 'CDNTV' na pesquisa." },
      { title: "Instale o app", description: "Selecione o aplicativo e clique em 'Obter' ou 'Baixar'." },
      { title: "Configure", description: "Abra o aplicativo e insira suas credenciais de acesso fornecidas pelo provedor." },
    ],
    notes: ["Caso não encontre o app na loja, use o app 'Downloader' para instalar via APK.", "Habilite 'Apps de fontes desconhecidas' nas configurações se necessário."],
  },
  {
    id: "celular-android",
    title: "Celular Android",
    subtitle: "Smartphone / Tablet",
    icon: Smartphone,
    color: "from-emerald-600/20 to-emerald-900/20",
    steps: [
      { title: "Abra a Play Store", description: "No seu celular Android, abra a Google Play Store." },
      { title: "Pesquise o app", description: "Digite 'SIGNALPLAY' na barra de pesquisa." },
      { title: "Instale", description: "Toque em 'Instalar' e aguarde o download." },
      { title: "Faça login", description: "Abra o aplicativo e insira seu login e senha." },
    ],
  },
  {
    id: "iphone-ipad",
    title: "iPhone / iPad",
    subtitle: "iOS / iPadOS",
    icon: Tablet,
    color: "from-gray-500/20 to-gray-700/20",
    steps: [
      { title: "Abra a App Store", description: "No seu iPhone ou iPad, abra a App Store." },
      { title: "Pesquise", description: "Toque na busca e digite 'SIGNALPLAY'." },
      { title: "Baixe o app", description: "Toque em 'Obter' e confirme a instalação com Face ID ou senha." },
      { title: "Acesse", description: "Abra o app e insira suas credenciais de acesso." },
    ],
    notes: ["Requer iOS 14 ou superior."],
  },
  {
    id: "tv-box",
    title: "TV Box",
    subtitle: "MXQ / HTV / Outros",
    icon: Box,
    color: "from-purple-600/20 to-purple-900/20",
    steps: [
      { title: "Abra o navegador ou Downloader", description: "Na sua TV Box, abra o navegador de internet ou o app 'Downloader'." },
      { title: "Baixe o APK", description: "Acesse o link fornecido pelo seu provedor para baixar o APK do SIGNALPLAY." },
      { title: "Instale o APK", description: "Após o download, abra o arquivo e confirme a instalação. Pode ser necessário habilitar 'fontes desconhecidas' nas configurações." },
      { title: "Faça login", description: "Abra o aplicativo e insira suas credenciais." },
    ],
    notes: ["Habilite 'Instalar apps de fontes desconhecidas' em Configurações > Segurança."],
  },
  {
    id: "computador",
    title: "Computador / Navegador",
    subtitle: "Windows / Mac / Linux",
    icon: Monitor,
    color: "from-cyan-600/20 to-cyan-900/20",
    steps: [
      { title: "Abra o navegador", description: "Abra o Google Chrome, Firefox, Edge ou qualquer navegador moderno." },
      { title: "Acesse o portal", description: "Digite o endereço fornecido pelo seu provedor na barra de endereços." },
      { title: "Faça login", description: "Insira seu login e senha na tela de autenticação." },
      { title: "Assista", description: "Navegue pelo catálogo e assista ao conteúdo diretamente no navegador." },
    ],
  },
  {
    id: "app-cdntv",
    title: "App CDNTV PLAY",
    subtitle: "Configuração especial",
    icon: Globe,
    color: "from-amber-600/20 to-amber-900/20",
    steps: [
      { title: "Baixe o app CDNTV", description: "Na loja de aplicativos do seu dispositivo, busque e instale o app 'CDNTV'." },
      { title: "Selecione o provedor", description: "Ao abrir o app, selecione o provedor 'SIGNAL PLAY' na lista." },
      { title: "Informe o domínio", description: "No campo de domínio/servidor, digite: tv.signalplay.com.br", note: "tv.signalplay.com.br" },
      { title: "Insira suas credenciais", description: "Digite seu login e senha fornecidos pelo provedor e acesse o conteúdo." },
    ],
    notes: ["O provedor deve ser exatamente 'SIGNAL PLAY'.", "O domínio deve ser: tv.signalplay.com.br"],
  },
  {
    id: "app-signalplay",
    title: "App SIGNALPLAY",
    subtitle: "Acesso direto",
    icon: Play,
    color: "from-blue-500/20 to-indigo-700/20",
    steps: [
      { title: "Baixe o app SIGNALPLAY", description: "Na loja de aplicativos do seu dispositivo (Play Store, App Store, etc.), busque 'SIGNALPLAY'." },
      { title: "Instale o aplicativo", description: "Clique em 'Instalar' ou 'Obter' e aguarde a conclusão." },
      { title: "Abra e faça login", description: "Abra o app e insira diretamente seu login e senha. Não é necessário configurar domínio ou provedor." },
    ],
    notes: ["No app SIGNALPLAY, basta login e senha. Nenhuma configuração adicional é necessária."],
  },
];
