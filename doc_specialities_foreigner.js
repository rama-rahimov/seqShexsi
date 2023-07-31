const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_specialities_foreigner', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ATIS_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    enterprise_ATIS_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    teachingYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    specialty_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EducationStageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    educationLevelId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    basicEducation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    educationLanguageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    educationFormId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entranceSpecialtyPaymentAmount: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ""
    },
    preparation_amunt: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'doc_specialities_foreigner',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
