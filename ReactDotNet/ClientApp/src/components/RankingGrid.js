import React, { } from 'react';

const RankingGrid = ({ items, imgArr }) => {

  const rankingGrid = [];
  const cellCollectionTop = [];
  const cellCollectionMid = [];
  const cellCollectionMeh = [];
  const cellCollectionBot = [];

  //
  function createCellsForRow(rowNum) {
    var rankNum = 0;
    var currCollection = [];
    var label = "";
    const numCells = 5;

    for (var a = 1; a <= numCells; a++) {
      rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

      if (rowNum === 1) {
        currCollection = cellCollectionTop;
        label = "Top Tier";
      }
      else if (rowNum === 2) {
        currCollection = cellCollectionMid;
        label = "Mid Tier";
      }
      else if (rowNum === 3) {
        currCollection = cellCollectionMeh;
        label = "Meh Tier";
      }
      else if (rowNum === 4) {
        currCollection = cellCollectionBot;
        label = "Bot Tier";
      }

      pushCellMarkupToArr(currCollection, rankNum, label);
    }
  }

  //
  function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
    if (rankNum > 0) {
      var item = items.find(o => o.ranking === rankNum);
      cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div>)
    }
    else {
      cellCollection.push(<div className="row-label">
        <h4>{rowLabel }</h4>
      </div>)
    }
  }

  //
  function createRowsForGrid() {
    rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>);
    rankingGrid.push(<div className="rank-row mid-tier">{cellCollectionMid}</div>);
    rankingGrid.push(<div className="rank-row meh-tier">{cellCollectionMeh}</div>);
    rankingGrid.push(<div className="rank-row bot-tier">{cellCollectionBot}</div>);

    return rankingGrid;
  }

  //
  function createCellsForRows() {
    const maxRows = 4;
    for (var row = 1; row <= maxRows; row++) {
      createCellsForRow(row);
    }
  }

  // Called by JSX Return statement. Top level function component control.
  function createRankingGrid() {
    createCellsForRows();
    return createRowsForGrid();
  }


  return (
    <div className="rankings">
      {createRankingGrid()}
    </div>
  )
};

export default RankingGrid;