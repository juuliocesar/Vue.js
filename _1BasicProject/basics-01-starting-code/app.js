const app = Vue.createApp({

    data(){

        return{

            courseGoal: 'Finish the course and learn Vue',
            vuelink: 'https://vuejs.org/'
        };
    },


    methods:{

        outputGoal: function(){

            const randonNumber = Math.random();
            if(randonNumber<0.5){

                return 'Learn Vue';
            }

            else{
                return 'Mater Vue';
            }
        }

    }

}); //Primer paso





app.mount('#user-goal'); //Especificamos que parte del html queremos controlar con Vue a través de su ID





