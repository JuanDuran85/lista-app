export interface ListaInter {
    id?: number;
    titulo?: string;
    creadaEn?: Date;
    terminadaEn?: Date;
    terminada?: boolean;
    item?: ListaItemInter[];
}

export interface ListaItemInter {
    desc?: string;
    completado?: boolean;
}
