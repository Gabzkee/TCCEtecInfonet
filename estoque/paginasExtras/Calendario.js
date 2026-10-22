
const calendario = document.getElementById("calendario");
const ano = 2026;

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

const diasS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];


const events = {
    "2026-10-21": {
        tipo: "ChegadaL",
        descricao: "Previsão de chegada do lote 103."
    },
    "2026-10-28": {
        tipo: "balanco",
        descricao: "Conferência mensal do estoque."
    },
    "2026-11-02": {
        tipo: "Contagem",
        descricao: "Contagem física do estoque."
    },
    "2026-11-20": {
        tipo: "ChegadaL",
        descricao: "Previsão de chegada do lote 104."
    }
};

function gerarCalendario(numeroMes) {

    const mes = document.createElement("details");

    mes.className = "mes";

    const titu= document.createElement("summary")

    titu.textContent = meses[numeroMes] + " " + ano;
    mes.appendChild(titu);

    const grade = document.createElement("div");
    grade.className = "gradeD";

    const firtsDay = new Date(ano, numeroMes, 1).getDay();

    const totalD= new Date(ano, numeroMes + 1, 0).getDate();

    diasS.forEach(dia => {

        const elemDia = document.createElement("div");
        elemDia.className = "diaSemana";
        elemDia.textContent = dia;
        grade.appendChild(elemDia);
    });

    mes.appendChild(grade);

    for (let i= 0; i < firtsDay; i++) {
        grade.appendChild(document.createElement("div"));
    }

    for (let dia = 1; dia <= totalD; dia++) {

        const cel = document.createElement('div');
        cel.className = "dia";

        const numm = document.createElement("span");

        numm.textContent = dia;

        cel.appendChild(numm);

        const verify = `${ano}-${String(numeroMes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

        if (events[verify]) {

            const event = events[verify];

            cel.classList.add("eventoAct");

            if (event.tipo === "ChegadaLote") {
                cel.classList.add("chegadaLote");

            } else if (event.tipo === "balanco") {
                cel.classList.add("balanco");

            } else if (event.tipo === "Contagem") {
                cel.classList.add("contagem");
            }

            const detalhes = document.createElement("details");
            const resumo = document.createElement("summary");

            resumo.textContent = event.tipo;

            const desc = document.createElement("div");

            desc.className = "descEvent";
            desc.textContent = event.descricao;

            detalhes.append(resumo, desc);
            cel.appendChild(detalhes);

        }

        grade.appendChild(cel);
        
    }

    

        return mes;

    }

    for (let mes = 0; mes < 12; mes++){

    calendario.appendChild(gerarCalendario(mes));
    }
