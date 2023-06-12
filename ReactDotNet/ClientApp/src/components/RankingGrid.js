

const RankingGrid = ({items, imgArr }) => {

  const rankingGrid = [];
  const cellCollectionTop = [];
  const cellCollectionMid = [];
  const cellCollectionMeh = [];
  const cellCollectionBot = [];


  function createRowsForGrid() {
    rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>);
    rankingGrid.push(<div className="rank-row mid-tier">{cellCollectionMid}</div>);
    rankingGrid.push(<div className="rank-row meh-tier">{cellCollectionMeh}</div>);
    rankingGrid.push(<div className="rank-row bot-tier">{cellCollectionBot}</div>);

  }

  function createRankingGrid() {
    createCellsForRows();
    return createRowsForGrid();
  }


  return (
    <div className="rankings">
      {createRankingGrid() }
    </div>
  )

}

export default RankingGrid;