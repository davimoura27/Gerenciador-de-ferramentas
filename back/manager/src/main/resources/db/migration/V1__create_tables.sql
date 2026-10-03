CREATE TABLE brand (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE category (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE equipment (
    id BIGSERIAL PRIMARY KEY,
    asset_code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    serial_number VARCHAR(150),
    model VARCHAR(150) NOT NULL,
    purchase_date DATE,
    purchase_value NUMERIC(12,2),
    status VARCHAR(30) NOT NULL,
    category_id BIGINT NOT NULL,
    brand_id BIGINT NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,

    CONSTRAINT fk_equipment_category
        FOREIGN KEY (category_id)
        REFERENCES category(id),

    CONSTRAINT fk_equipment_brand
        FOREIGN KEY (brand_id)
        REFERENCES brand(id)
)