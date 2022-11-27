new Vue({
    el:"#vm",
    data: {
        mensaje:"Este es el Mensaje"
    },
    beforeCreate: function() {
        console.log ("Llamando beforeCreate");
    },
    created: function() {
        console.log ("Llamando create");
    },
    beforeMount : function() {
        console.log ("Llamando beforeMount");
    },
    mounted : function() {
        console.log ("Llamando mounted");
    },
    beforeUpdate: function() {
        console.log ("Llamando beforeUpdate");
    },
    update: function() {
        console.log ("Llamando update");
    },
    beforeDestroy: function() {
            console.log ("Llamando beforeDestroy");
        },
    destroyed: function() {
            console.log ("Llamando destroyed");
        },
});