import java.util.Scanner;
public class Product {
	 public static void main(String[] args) {
	        System.out.println("input 1st  number: ");
	        Scanner firstNum = new Scanner(System.in);
	        int R= firstNum.nextInt();
	        System.out.println("input 2nd number: ");
	        Scanner secondNum = new Scanner(System.in);
	        int E= secondNum.nextInt(); 
	        int product= R*E; //product of two numbers
	        System.out.println("Product of "+R+" * "+E+"= "+product);
	    }
}
