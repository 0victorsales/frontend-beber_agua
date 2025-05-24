import * as LucideIcons from "lucide-react";
import { ContainerTitulo } from "./styles.ts";

function Titulo({ titulo, icone }) {
  const Icon = LucideIcons[icone];

  return (
    <ContainerTitulo>
      <Icon size={20} />
      <p>{titulo}</p>
    </ContainerTitulo>
  );
}

export default Titulo;
