package Week3Day12;

import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
//Write a Java program to find the longest word in a text file.
public class Exercise8 {
    public static void main(String[] args) throws FileNotFoundException {
    new Exercise8().findLongestWords();

    }
    public String findLongestWords() throws FileNotFoundException{
        String longest_word = "";
        String current;
        Scanner sc = new Scanner(new File("C:\\Users\\Khine\\IdeaProjects\\HelloWorld\\db\\data2.txt"));
    while (sc.hasNext()) {

        current = sc.next();
        if (current.length() > longest_word.length()) {
            longest_word = current;
        }

    }
        System.out.println("\n"+longest_word+"\n");
        return longest_word;
    }


}
