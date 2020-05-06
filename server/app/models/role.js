module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      sortOrder: {
        type: Sequelize.INTEGER
      },
      activeFlag: {
        type: Sequelize.BOOLEAN
      }
    },
    {
        timestamps: false,
        freezeTableName: true
    });
  
    return Role;
  };