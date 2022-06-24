const Discord = require('./Discord/Discord');

class IntegrationFactory {
    create(type) {
        switch (type) {
            default:
                return new Discord();
        }
    }
}