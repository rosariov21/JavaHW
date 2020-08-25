import java.util.Scanner;


public class conversion {
	public static void main(String[] args) {
        System.out.println("Enter any random number so we can change it in inches to meters: ");
        Scanner convert = new Scanner(System.in); 
        double i= convert.nextDouble(); //nextDouble() is used to input the value of an double with decimal points
        double meters= i* 0.0254; 
        System.out.println(i +" inch is "+meters+ " meters");
    }

}