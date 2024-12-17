```javascript
//Correct usage of $inc operator in MongoDB
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true } );
```