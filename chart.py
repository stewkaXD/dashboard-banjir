import os
import pandas as pd
import matplotlib.pyplot as plt

# Define the directory path
csv_folder_path = "./csv"

# Get all filenames in the directory
filenames = os.listdir(csv_folder_path)

# Filter for CSV files (optional)
csv_filenames = [filename for filename in filenames if filename.endswith(".csv")]  

# Loop through each CSV file
for filename in csv_filenames:
  # Construct the complete file path
  file_path = os.path.join(csv_folder_path, filename)

  # Read the CSV file using pandas
  try:
      table = pd.read_csv(file_path)

      # Extract Time and Water Level columns (assuming these names)
      time_data = table["Time"]
      water_level_data = table["Water Level (cm)"]

      # Reverse time data for correct order
      time_data = time_data[::-1]  # Reverse time data using slicing

      # Create the line chart
      plt.figure(figsize=(12, 5))
      plt.plot(time_data, water_level_data)
      plt.xlabel("Time")
      plt.ylabel("Water Level (cm)")
      plt.title(f"Water Level over Time - {filename}")

      # Customize the plot (optional)
      # You can add functionalities like labels, grid, etc. using matplotlib functions
      plt.savefig("./chart_images/" + filename + ".png")

  except FileNotFoundError:
      print(f"Error: File not found - {filename}")

print("Finished processing all CSV files and generating charts.")