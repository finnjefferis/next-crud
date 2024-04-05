/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u90fnb0em0q14fz",
    "created": "2024-04-05 10:09:03.783Z",
    "updated": "2024-04-05 10:09:03.783Z",
    "name": "crud",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "znq7kyzm",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "emvd0ez6",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u90fnb0em0q14fz");

  return dao.deleteCollection(collection);
})
