const app = Vue.createApp({

    data(){

        return{

            courseGoal: 'Finish the course and learn Vue',
            courseGoal2: 'Lets go!',
            vuelink: 'https://vuejs.org/'
        };
    },


    methods:{

        outputGoal: function(){

            const randonNumber = Math.random();
            if(randonNumber<0.5){

                return this.courseGoal2; //Con this podemos acceder a atributos de data
            }

            else{
                return this.courseGoal;
            }
        }

    }

}); //Primer paso





app.mount('#user-goal'); //Especificamos que parte del html queremos controlar con Vue a través de su ID





