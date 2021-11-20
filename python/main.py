# 3 files -> outputs
# 1 file: NameSurname list
# 2 file is Base: Wszystkie ludzie, które brały udział w wydarzeniach set(ludzi) 

import csv

def prepare_first(path_to_csv):
    """
    Csv file is: Name, Surname, ...    
    """
    # read csv file to dataframe
    result = []
    with open(path_to_csv, 'r') as f:
        # Read csv files 
        line = csv.reader(f)
        for row in line:
            result.append(row[0]+ row[1])
    with open('NameSurname.txt', 'w') as f:
        for name in result:
            f.write(name + '\n')

def prepare_second(path_to_plaintext_new, path_to_plaintext_old):
    """
    path_to_plaintext_new -> plaintext
    path_to_plaintext_old -> plaintext
    """
    # read csv file to dataframe

    set_old = set()
    set_new = set()
    with open(path_to_plaintext_new, 'r') as f:
        for line in f:
            set_new.add(line.strip())
    with open(path_to_plaintext_old, 'r') as f:
        for line in f:
            set_old.add(line.strip())
    set_old = set_new.difference(set_old)
    with open(path_to_plaintext_old, 'a') as f:
        for name in set_old:
            f.write(name + '\n')


def process_data(path_to_csv, path_to_plaintext_new="NameSurname.txt", path_to_plaintext_old = 'database.txt'):
    """
    path_to_csv -> csv
    path_to_plaintext_new -> plaintext
    path_to_plaintext_old -> plaintext
    """
    prepare_first(path_to_csv)
    prepare_second(path_to_plaintext_new, path_to_plaintext_old)


process_data('data.csv')
