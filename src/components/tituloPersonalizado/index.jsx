import * as LucideIcons from "lucide-react";
import { ContainerTituloPagina} from "./styles.ts";

function TituloPagina({ titulo, subtitulo, icone }) {
  const Icon = LucideIcons[icone];

  return (
    <ContainerTituloPagina>
      <div className="icone-container">
        <Icon size={22} />
      </div>
      <div>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
    </ContainerTituloPagina>
  );
}

export default TituloPagina;
