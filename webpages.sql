CREATE DATABASE webpages;

USE webpages;

CREATE TABLE Designs(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    DesignName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    TimeToCreate VARCHAR(10) NOT NULL,
    primary key(ItemID)
);

select * from Designs;

INSERT INTO Designs(DesignName,Category,Price,TimeToCreate)
VALUES ("Portfolio","PROFESSIONAL",49.95, "week"),
    ("Video Game","ENTERTAINMENT",59.99,"two weeks"),
    ("Investment Site","PROFESSIONAL",24.50,"three weeks"),
    ("Clothing Site","PROFESSIIONAL",75.00,"one week"),
    ("Streamer Site","ENTERTAINMENT",54.25,"one week"),
    ("Blog Site","RECREATIONAL",42.42,"one week"),
    ("Pet Site","RECREATIONAL",15.00,"one week"),
    ("Fan Site","ENTERTAINMENT",25.50,"one week"),
    ("Music Site","ENTERTAINMENT",30.50,"two weeks"),
    ("Movie Site","ENTERTAINMENT",19.95,"two weeks");

CREATE TABLE Categories(
    DepartmentID MEDIUMINT AUTO_INCREMENT NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    OverHeadCosts DECIMAL(10,2) NOT NULL,
    TotalSales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(DepartmentID));

INSERT INTO Categories(CategoryName, OverHeadCosts, TotalSales)
VALUES ('ENTERTAINMENT', 600.00, 16.00),
    ('PROFESSIONAL', 800.00, 12.00),
    ('RECREATIONAL', 200.00, 9.00);