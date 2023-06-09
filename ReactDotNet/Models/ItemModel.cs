namespace ReactDotNet.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ImageId { get; set; }
        public int Ranking { get; set; }
        
        //Items 1, Movies 2
        public int ItemType { get; set; }

    }
}
