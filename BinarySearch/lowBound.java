public class lowBound {
    public static void main (String [] args ) {

        int arr[] = {2,3,4,5,6,6,7,8,9,10};
        int ans = arr.length;
        int x = 8;
        int low = 0;
        int high = arr.length-1;

        while ( low<=high ) {
            int mid = (low + high )/2;

            if ( arr[mid] >= x) {
                ans = mid;
                high = mid-1;
            } else {
                low = mid + 1;
            }
        }

        System.out.println(ans);
    }
}
