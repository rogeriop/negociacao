export class Negociacao {
    
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ) {}
    
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const negociacao = new Negociacao(
            new Date(dataString.replace(/-/g, ',')),
            parseInt(quantidadeString),
            parseFloat(valorString)   
        )
        return negociacao;

    }
}