import Image from '../models/Image';

export default {
  render(image: Image): any {
    return {
      id: image.id,
      url: `http://fcae330d5cc9.ngrok.io/uploads/${image.path}`,
      // url: `http://localhost:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]): any {
    return images.map((image) => this.render(image));
  },
};
