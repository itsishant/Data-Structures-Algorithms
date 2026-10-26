public class rotatedInArrayII {

    
        public static boolean SearchBS( int arr[], int target ) {
            int low = 0;
            int high = arr.length-1;

            while ( low <= high) {
                int mid = (low + high) /2 ;
                if (arr[mid] ==  target)  return true;

                if ( arr[low] ==  arr[mid] && arr[mid] == arr[high] ){
                    low++;
                    high--;
                    continue;
                }

                if ( arr[low] <= arr[mid]) {
                    if ( arr[low]<=target && arr[mid] >= target ) {
                        high = mid -1;
                    }
                    else {
                        low = mid + 1;
                    }
                } 
                else {
                    if ( arr[mid] <= target && arr[high]>= target) {
                        low = mid +1;
                    }
                    else {
                        high = mid - 1;
                    }
                }
            }
            return false; 
        }

    public static void main (String[] args ) {
        int arr[] = {1,2,3,4,5,5,6,6,6,7};
        int target = 6;
        System.out.println(SearchBS(arr, target));

    }
}