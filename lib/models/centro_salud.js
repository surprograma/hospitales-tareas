import { Model, DataTypes } from 'sequelize';

export default class CentroSalud extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'CentroSalud',
      }
    );
  }
}
