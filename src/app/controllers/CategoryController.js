import * as Yup from 'yup';
import Category from '../models/Category.js';
import User from '../models/User.js';

class CategoryController {
    async store(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
            });

            try {
                await schema.validateSync(request.body, { abortEarly: false });
            } catch (err) {
                return response.status(400).json({ error: err.errors });
            }

            const { admin: isAdmin } = await User.findByPk(request.userId);

            if (!isAdmin) {
                return response.status(401).json();
            }

            const { name } = request.body;

            let path;
            if (request.file) {
                path = request.file.filename;
            }

            const categoryExists = await Category.findOne({
                where: { name }
            });

            if (categoryExists) {
                return response.status(400).json({ error: "Category already exists!" });
            }

            const { id } = await Category.create({ name, path });

            return response.json({ id, name });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error" });
        }
    }

    async index(request, response) {
        try {
            const categories = await Category.findAll();
            return response.json(categories);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error" });
        }
    }

    async update(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string(),
            });

            try {
                await schema.validateSync(request.body, { abortEarly: false });
            } catch (err) {
                return response.status(400).json({ error: err.errors });
            }

            const { admin: isAdmin } = await User.findByPk(request.userId);

            if (!isAdmin) {
                return response.status(401).json();
            }

            const { name } = request.body;
            const { id } = request.params;

            const category = await Category.findByPk(id);

            if (!category) {
                return response.status(404).json({ error: "Category not found!" });
            }

            let path;
            if (request.file) {
                path = request.file.filename;
            }

            await category.update({ name, path });

            return response.status(200).json({ message: "Category updated successfully!" });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error" });
        }
    }
}

export default new CategoryController();