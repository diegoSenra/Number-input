using System;
using System.Collections.Generic;
using numberinput.Model;
using numberinput.Persistence;

namespace numberinput.Service
{
    public class NumberService
    {
        private NumberDao dao;

        public NumberService()
        {
            this.dao = new NumberDao();
        }

        public void PostNumberToDb(Number number)
        {
            dao.Insert(number);
        }

        public double[] FilterIdList(string[] idList)
        {
            List<Number> listOfAll = dao.GetAll(); //opted to get all rows (and then filter them) to keep only a single query to db
            double[] result = new double[idList.Length];
            int index = 0;

            foreach(string id in idList)
            {
                foreach(Number num in listOfAll)
                {
                    if (Convert.ToInt32(id) == num.Id)
                    {
                        result[index] = Convert.ToDouble(num.NumberInput);
                        index++;
                    }
                }
            }

            return result;
        }

    public string Sum(string[] numberList)
        {
            double result = 0;
            double[] filteredNumberList = FilterIdList(numberList);

            foreach(double number in filteredNumberList)
            {
                result += number;
            }

            return Convert.ToString(result);
        }
    }
}
