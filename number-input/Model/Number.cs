using System.ComponentModel.DataAnnotations.Schema;

namespace numberinput.Model
{
    [Table("numbersubmits")]
    public class Number
    {
        private int id;
        private string numberInput;

        public int Id { get; set; }
        public string NumberInput { get; set; }
    }
}
