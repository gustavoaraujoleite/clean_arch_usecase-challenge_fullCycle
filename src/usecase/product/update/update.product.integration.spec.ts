import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update.product.usecase";

describe("Test update product use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const useCase = new UpdateProductUseCase(productRepository);

    const product = new Product("1", "Product 1", 100);
    await productRepository.create(product);

    const input = {
      id: "1",
      name: "Product 1 Updated",
      price: 200,
    };

    const result = await useCase.execute(input);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(result).toEqual({
      id: "1",
      name: "Product 1 Updated",
      price: 200,
    });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1 Updated",
      price: 200,
    });
  });
});

