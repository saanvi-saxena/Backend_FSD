import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

// GET
app.get("/products", (req, res) => {
    const data = fs.readFileSync("product.json", "utf-8");
    const products = JSON.parse(data);
    res.json(products);
});

// POST
app.post("/products", (req, res) => {
    const data = fs.readFileSync("product.json", "utf-8");
    const products = JSON.parse(data);

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    fs.writeFile(
        "product.json",
        JSON.stringify(products),
        (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to save product" });
            }

            res.json(newProduct);
        }
    );
});

// Start server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});