public class upperBound {
    public static void main(String[] args) {
        int arr[] = { 1,2,3,4,5,6};
        int ans = arr.length;
        int x = 4;
        int low = 0;

        int high = arr.length - 1;

        while ( low <= high ) {
            int mid = (low + high )/2;

            if ( arr[mid] > x) {
                ans = mid;
                high = mid-1;
            } else {
                low = mid + 1;
            }
        }
        System.out.println(ans);
    }
}
