const app = new Vue({
    el: "#app",
    
    data:{
        mailList:[],
    },
    methods:{
    },
    mounted(){
        
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
            const result = response.data.response;
            this.mailList.push(result)
            });
        };
        
    },
});

/* 
!Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

!Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */




