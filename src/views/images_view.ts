import Image from "../models/Image"

const uploadPath = 'http://localhost:3333/uploads/'

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: uploadPath + image.path,
        }
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
}