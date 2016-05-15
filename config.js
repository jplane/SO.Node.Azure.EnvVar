
module.exports = function(){
    switch(process.env.NODE_ENV){

        case 'prodAzure':
            return {
                name: 'production in Azure'
            };

        case 'stagingAzure':
            return {
                name: 'staging in Azure'
            };

        default:
            return {
                name: 'localhost'
            };
    }
};
