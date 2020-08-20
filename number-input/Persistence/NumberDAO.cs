using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using numberinput.Model;

namespace numberinput.Persistence
{
    public class NumberDao
    {
        string connString = @"server=localhost;port=3306;userid=root;password=PASSWORD;database=numberdb";
        
        public void Insert(Number number)
        {
            using var connection = new MySqlConnection(connString);
            connection.Open();

            var query = "INSERT INTO numbersubmits(numberInput,date,time) VALUES (@numberInput,CURDATE(),CURTIME());";
            using var cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@numberInput", number.NumberInput);

            MySqlTransaction transaction = connection.BeginTransaction();

            try
            {
                cmd.Prepare();
                cmd.ExecuteNonQuery();
                transaction.Commit();
            }
            catch (MySqlException e)
            {
                Console.WriteLine("Database error: " + e.Message);
                transaction.Rollback();
            }

            connection.Close();
        }

        public List<Number> GetAll()
        {
            List<Number> numberList = new List<Number>();
            string query = "SELECT * FROM numberSubmits;";

            using var connection = new MySqlConnection(connString);
            connection.Open();

            using var cmd = new MySqlCommand(query, connection);

            try
            {
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        numberList.Add(new Number
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            NumberInput = Convert.ToString(reader["numberInput"]),
                        });
                    }
                }
            }
            catch (MySqlException e)
            {
                Console.WriteLine("Database error: " + e.Message);
            }

            connection.Close();
            return numberList;
        }
    }
}
