'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'lastName', {
    type: Sequelize.STRING,
    allowNull: false,
  });
  await queryInterface.addColumn('users', 'firstName', {
    type: Sequelize.STRING,
    allowNull: false,
  });
  await queryInterface.addColumn('users', 'middleName', {
    type: Sequelize.STRING,
    allowNull: true,
  });
  await queryInterface.addColumn('users', 'birthDate', {
    type: Sequelize.DATEONLY,
    allowNull: false,
  });
  await queryInterface.addColumn('users', 'hasDrivingLicense', {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'lastName');
  await queryInterface.removeColumn('users', 'firstName');
  await queryInterface.removeColumn('users', 'middleName');
  await queryInterface.removeColumn('users', 'birthDate');
  await queryInterface.removeColumn('users', 'hasDrivingLicense');
}