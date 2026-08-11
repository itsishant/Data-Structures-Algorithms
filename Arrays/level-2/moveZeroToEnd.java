import java.util.*;

public class moveZeroToEnd{

    public static void Brute(int arr[], int n){


        ArrayList<Integer> temp = new ArrayList<>();
        int length = arr.length;
        for(int i = 0; i<length; i++){
            if(arr[i] != 0){
                temp.add(arr[i]);
            }
        }

        for(int i = 0; i<temp.size(); i++){
            arr[i] = temp.get(i);
        }

        for(int i = temp.size(); i<length; i++){
            arr[i] = 0;
        }

    }

    public static void Optimal(int arr[], int n ){
        
        int j = -1;
        int length = arr.length;
        for(int i = 0; i<length; i++){
            if(arr[i] == 0){
                j = i;
                break;
            }
        }

        for(int i = j+1; i<n; i++){
            if(arr[i] != 0){
                int temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            }
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner (System.in);
        int n = sc.nextInt();
        int [] arr = new int [n];
        for(int i = 0; i<n; i++){
            arr[i] = sc.nextInt();
        }

        Optimal(arr, n);

        for(int i = 0; i<n; i++){
            System.out.print(arr[i]+ " ");
        }
    }
}