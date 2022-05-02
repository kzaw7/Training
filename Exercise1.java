package Week3Day12;

import java.io.File;
import java.util.Date;

//Write a Java program to get a list of all file/directory names from the given.

public class Exercise1 {
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Khine\\IdeaProjects\\HelloWorld\\db\\data2.txt");
        String[] fileList = file.list();
        for(String name:fileList){
            System.out.println(name);
        }
    }
}
