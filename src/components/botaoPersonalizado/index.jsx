import * as LucideIcons from "lucide-react";
import { BotaoPersonalizado } from "./styles.ts";

function BotaoCustomizado({ texto, icone, onClick }) {
  const Icon = LucideIcons[icone];

  return (
    <BotaoPersonalizado onClick={onClick}>
      <Icon size={20} />
      <span>{texto}</span>
    </BotaoPersonalizado>
  );
}

export default BotaoCustomizado;
