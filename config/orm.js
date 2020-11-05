var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  selectJoinAll: function(col1ToSearch, col2ToSearch, table1Input, table2Input, col1ToJoin, col1ToJoin) {
    var queryString = "SELECT ??, ?? FROM ?? LEFT JOIN ?? ON ?? = ??";
    connection.query(queryString, [col1ToSearch, col2ToSearch, table1Input, table2Input, col1ToJoin, col1ToJoin], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol, callback) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? (" + cols.toSting() + ") VALUES (" + printQuestionMarks(vals.length) + ")";
    console.log(queryString);
    connection.query(queryString, [table, cols, vals, cb], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
};

module.exports = orm;
