const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cronometro = () => {
    let tempo = 0; 
    let pausa = false; 
    let rodando = false; 
    let timer; 

    const iniciar = () => {
        if (!rodando) { 
            rodando = true;
            timer = setInterval(() => {
                tempo++;
                console.log(`Tempo: ${tempo} segundos`);
            }, 1000);

            rl.question('Pressione Enter para parar o cronômetro, "p" para pausar ou "r" para redefinir: ', (input) => {
                if (input === 'p') { 
                    pausa = true;
                    clearInterval(timer); 
                    console.log('Cronômetro pausado.');
                } else if (input === 'r') { 
                    clearInterval(timer);
                    tempo = 0; 
                    rodando = false;
                    console.log('Cronômetro redefinido.');
                    iniciar(); 
                } else { 
                    clearInterval(timer);
                    rodando = false; 
                    console.log('Cronômetro parado.');
                    rl.close(); 
                }
            });
        } else {
            console.log('O cronômetro já está rodando.'); 
        }
    };

    iniciar(); 
};

cronometro();
