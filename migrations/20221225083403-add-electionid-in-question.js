"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("questions", "electionid", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("questions", {
      fields: ["electionid"],
      type: "foreign key",
      references: {
        table: "elections",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("questions", "electionid");
  },
};
