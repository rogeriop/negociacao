import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="tabel table-hover table-borederd">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>`;
        }).join('')}
            </tbody>
                `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
