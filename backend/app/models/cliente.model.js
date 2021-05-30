module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('cliente', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  nome: {
			type: Sequelize.STRING
	  }
	  ,idade: {
		type: Sequelize.INTEGER
	},
	  email: {
			type: Sequelize.STRING
	  },
	});
	
	return Cliente;
}