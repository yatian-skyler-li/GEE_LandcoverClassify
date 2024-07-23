# GEE_LandcoverClassify

# Datasets
- Landsat 8 satellite imagas were used for this project
- 2017-5-1 was selected as start date and 2017-10-1 as end date based on the dry season in Australia to minimize the impact of cloud of satellite images.
- Since Landsat 8 data was used, please made sure the start dates are after 2013 February, the Landsat 8 data available time, if you would like to change them
- The training and validation data should be selected independently

# Main classifiers in GEE
- Classification and Regression Trees (CART) are binary trees created based on the largest feature information gained at each node of the tree, which is commonly used for classification and regression. 
  - Pros: The input data type are flexible for CART to handle, both numeric and categorical data will work. Also the algorithm is easy to understand and the trees can be visualized for interpretation. 
  - Cons: It’s prone to overfitting issues that some very complex trees may fail to generalize the data. Also, small variations in the data may cause different decision trees with variations. 
- Random forest builds many decision trees and achieves randomness by choosing random subsets of features for splitting nodes. 
  - Pros: Random forest use many decision trees to reduce overfitting problem to get more accurate results. Also, it can interpret the importance of different features in the prediction and could handle outliers and noise better than single decision trees.
  - Cons: Due to the complex decision tree structure, the algorithm needs more memory and computing power, which may take longer time than a single decision tree.
- Naïve Bayes is built based on Bayes’ theorem with the naïve assumption of independence between features, which is commonly used for large datasets binary and multiclass classification. 
  - Pros: It takes shorter time to run and needs small mount of training data. Also the algorithm is relatively simple and it is easy to implement and understand. 
  - Cons: The assumption of all features to be independent need to be hold, however, it’s rare in real life scenarios. Moreover, all the possible categories need to be seen in the training data to avoid poor performance.

# Accuracy assessment
The validation error matrix can not provide detailed information on source of error and potential way to improve the classification. Other accuracy metrics like consumersAccuracy() will provide more detailed accuracy information for each class.

# Future improvement
According the to accuracy metrics, the step of creating training data can be improved by using high resolution image to select reference point, especially for Urban and Exposed classes. Also the validation data collection can also be improved by using the field-verified data created by professionals, which can improve the accuracy assessment. 
