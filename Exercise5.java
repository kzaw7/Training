package Week3Day12;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//Write Java program to read input from java console.
public class Exercise5 {
    public static void main(String[] args) throws IOException{
        BufferedReader R = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Input your name: ");
        String name = R.readLine();
        System.out.println("Your name is: " + name);
    }
}
